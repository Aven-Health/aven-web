export default function MeetTheTeam() {
  const team = [
    { id: 1, name: "Alice Johnson", role: "CEO", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Bob Smith", role: "CTO", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Clara Lee", role: "Lead Developer", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="bg-primary min-h-screen text-white px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Meet the Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {team.map(({ id, name, role, img }) => (
          <div key={id} className="bg-cardLight rounded-lg p-6 text-center">
            <img
              src={img}
              alt={`${name} photo`}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-accent">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
