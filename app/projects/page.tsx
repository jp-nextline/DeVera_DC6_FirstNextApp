const projects = [
{ id: 1, name: "After Away" },
{ id: 2, name: "Crash Course" },
{ id: 3, name: "Neo Magus" },
];

export default function ProjectsPage() {
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">Projects</h1>

            <ul>
                {projects.map((p) => (
                <li key={p.id}>•{p.name}</li>
                ))}
            </ul>
        </main>
    );
}