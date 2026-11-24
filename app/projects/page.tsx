const projects = [
{ id: 1, name: "After Away", description: "A story of a knight who is forced out of retirement to save the world."},
{ id: 2, name: "Crash Course", description: "A story of a school that is transmigrated to a world of fantasy and magic."},
{ id: 3, name: "Good Evening", description: "A story of an alternate version of Earth filled with superheroes and villains."},
];

export default function ProjectsPage() {
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">Projects</h1>

            <ul>
                {projects.map((p) => (
                <li key={p.id}><b>{p.name}</b>: {p.description}</li>
                ))}
            </ul>
        </main>
    );
}