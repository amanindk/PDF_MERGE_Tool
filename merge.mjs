import PDFMerger from "pdf-merger-js";

export async function mergePdfs(pdf1, pdf2, output) {
  const merger = new PDFMerger();
  await merger.add(pdf1);
  await merger.add(pdf2);

  await merger.save(output);
}
