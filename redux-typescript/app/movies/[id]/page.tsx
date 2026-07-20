export default async function MovieDetailsPage({params}: {
    params: Promise<{ id: string }> })
{
    const { id } = await params
    return (<div>
        Movie Details Page {id}
    </div>)
}