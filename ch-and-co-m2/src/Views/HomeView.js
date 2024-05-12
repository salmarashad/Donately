function HomeView({setPage}) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center  text-white -mt-8 -mb-8">
          {/* Hero Section */}
          <section className="w-full h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center z-[1]" style={{backgroundImage: 'url("https://images.inc.com/uploaded_files/image/1920x1080/getty_494415321_109575.jpg")'}}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">Empower Change: Donate Beyond Money</h1>
              <p className="text-lg md:text-xl">Transforming lives and communities through non-monetary contributions</p>
              <button className="bg-farahorange-500 hover:bg-farahorange-600 text-white font-bold py-3 px-8 mt-8 rounded-full transition duration-300" onClick={() => setPage("donations")}>Get Involved</button>
            </div>
          </section>
    
          {/* Main Content */}
          <section className="container mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Donation Categories */}
              <div className="bg-farahgreen-500 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Doante Your Time & Skills</h2>
                <p>Volunteer in either medical or teaching fields</p>
                <button className="bg-farahgreen-700 hover:bg-farahgreen-600 text-white font-bold py-2 px-4 mt-4 rounded-full transition duration-300"
                onClick={() => setPage("volunteering")}
                >Explore</button>
              </div>
              <div className="bg-farahgreen-500 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Donate Your Items </h2>
                <p>Donate Clothes, Toys, Medical Supplies, Food, Blood, and School Supplies</p>
                <button className="bg-farahgreen-700 hover:bg-farahgreen-600 text-white font-bold py-2 px-4 mt-4 rounded-full transition duration-300"
                onClick={() => setPage("donations")}
                >Explore</button>
              </div>
              <div className="bg-farahgreen-500 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">View Organizations</h2>
                <p>Feel free to look at our current partner organizations </p>
                <button className="bg-farahgreen-700 hover:bg-farahgreen-600 text-white font-bold py-2 px-4 mt-4 rounded-full transition duration-300"
                onClick={() => setPage("organizations")}
                >Explore</button>
              </div>
              
              {/* Add more category cards similarly */}
            </div>
          </section>
    
          
    
          {/* Call to Action */}
          <section className=" py-16 text-center">
            <h2 className="text-3xl text-farahgray-900 font-bold mb-8">Ready to make a difference?</h2>
            <button className="bg-farahorange-500 hover:bg-farahorange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            onClick={() => setPage("donations")}
            >Donate Now</button>
          </section>
    
          {/* Footer */}
          <footer className="text-farahgray-900 text-center py-8">
            <p>&copy; 2024 Empower Change. All rights reserved.</p>
          </footer>
        </div>
      );
}
export default HomeView;