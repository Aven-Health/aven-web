export default function AboutUs() {
  return (
    <div className="bg-primary min-h-screen text-white px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg mb-6">
        We’re a young health-tech platform.
      </p>
      <p className="text-lg mb-6">
        Our mission is to make personal wellbeing easy, accessible, and enjoyable no matter where you are in the world.
      </p>
      <div className="flex justify-center">
        {/* Minimal illustration placeholder */}
        <div className="w-64 h-40 bg-cardLight rounded-lg flex items-center justify-center text-primary font-semibold">
          Team Illustration
        </div>
      </div>
    </div>
  );
}
