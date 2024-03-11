export async function POST(request) {
  const req = await request.formData();

  console.log(req.get("name"));

  return Response.json({ message: "ini post" });
}
//
