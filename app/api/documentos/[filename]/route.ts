import { NextRequest, NextResponse } from "next/server";
import { readFile, readdir } from "fs/promises";
import path from "path";

// Nombres normalizados a NFC. El nombre real en disco puede estar en NFD
// (ej. "ó" como "o" + acento combinante), por eso comparamos siempre normalizado.
const ALLOWED_FILES = new Set(
  ["Claude Code módulo 3.pdf", "Claude Code módulo 4.pdf"].map((name) =>
    name.normalize("NFC")
  )
);

const DOCUMENTOS_DIR = path.join(process.cwd(), "public", "documentos");

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  const requested = decodeURIComponent(filename).normalize("NFC");

  if (!ALLOWED_FILES.has(requested)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    // Buscamos el archivo real en disco comparando por nombre normalizado,
    // de modo que coincida sin importar si está en NFC o NFD.
    const entries = await readdir(DOCUMENTOS_DIR);
    const actualName = entries.find(
      (entry) => entry.normalize("NFC") === requested
    );

    if (!actualName) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const fileBuffer = await readFile(path.join(DOCUMENTOS_DIR, actualName));

    // filename*= con codificación UTF-8 garantiza que el nombre con acentos
    // llegue correctamente al navegador; filename= queda como respaldo ASCII.
    const asciiFallback = requested.replace(/[^\x20-\x7E]/g, "_");
    const encoded = encodeURIComponent(requested);

    return new NextResponse(new Uint8Array(fileBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${asciiFallback}"; filename*=UTF-8''${encoded}`,
        "Content-Length": String(fileBuffer.length),
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
