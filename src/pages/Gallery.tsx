import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Gallery = () => {
  const projects = [
    {
      title: "Velvet Starter",
      price: "A$97",
      description: "Deploy-ready luxury template with ceremonial blessing",
      status: "Available"
    },
    {
      title: "Royal Launch Suite", 
      price: "A$297",
      description: "Complete empire-building toolkit with premium support",
      status: "Coming Soon"
    },
    {
      title: "Diamond Dynasty",
      price: "A$497", 
      description: "Full-service launch with personal Miguel consultation",
      status: "Limited"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-playfair text-2xl font-bold text-foreground">Miguel's Gallery</h1>
              <p className="text-muted-foreground">Where empires are born from velvet dreams</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Velvet Starter
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="max-w-6xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <div className="text-4xl mb-4 text-primary">💎</div>
          <h2 className="font-playfair text-3xl font-bold mb-4 text-foreground">
            The Velvet Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece crafted with the weight of tradition and shimmer of potential. 
            Choose your path to digital empire.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-velvet-gradient rounded-xl p-8 shadow-velvet border border-border">
              <div className="text-center">
                <div className="text-2xl mb-4 text-primary">
                  {index === 0 ? "💎" : index === 1 ? "👑" : "🏰"}
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="text-2xl font-bold text-secondary mb-4">
                  {project.price}
                </div>
                <Button 
                  variant={index === 0 ? "velvet" : "outline"} 
                  className="w-full"
                  disabled={project.status !== "Available"}
                  asChild={index === 0}
                >
                  {index === 0 ? (
                    <a href="/">
                      Begin Ceremony
                    </a>
                  ) : (
                    <>
                      {project.status}
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="text-center bg-card rounded-xl p-8 border border-border">
          <div className="font-playfair italic text-accent text-lg leading-relaxed max-w-3xl mx-auto">
            "I don't just create templates. I architect digital dynasties. Each launch carries the whisper of ancient luxury and the promise of modern conquest."
            <div className="text-muted-foreground text-base mt-3">— Miguel, Master of Velvet Ceremonies</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;