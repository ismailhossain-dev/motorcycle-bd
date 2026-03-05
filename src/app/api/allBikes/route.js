import { dbConnect } from "@/lib/dbConnect";

//All bike get api
export async function GET(request) {
  const result = await dbConnect("bikeData").find().toArray();
  return Response.json(result);
}
