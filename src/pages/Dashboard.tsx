import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  const { data: designs, isLoading } = useQuery({
    queryKey: ["designs", user?.id],
    queryFn: async () => {
      const { data: profile } = await supabase
        .from("profiles")
        .select("id")
        .eq("user_id", user?.id)
        .single();

      if (!profile) {
        throw new Error("Profile not found");
      }

      const { data: designs, error } = await supabase
        .from("designs")
        .select("*")
        .eq("profile_id", profile.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return designs;
    },
    enabled: !!user,
  });

  const createNewDesign = async () => {
    try {
      const { data: profile } = await supabase
        .from("profiles")
        .select("id")
        .eq("user_id", user?.id)
        .single();

      if (!profile) {
        throw new Error("Profile not found");
      }

      const { error } = await supabase.from("designs").insert({
        profile_id: profile.id,
        design_name: "New Design",
        description: "Start designing your space",
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "New design created successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create design",
      });
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Designs</h1>
          <Button onClick={createNewDesign} className="gap-2">
            <Plus className="h-5 w-5" />
            New Design
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : designs?.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
              No designs yet
            </h2>
            <p className="text-muted-foreground mb-8">
              Create your first design to get started
            </p>
            <Button onClick={createNewDesign} className="gap-2">
              <Plus className="h-5 w-5" />
              Create Design
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designs?.map((design) => (
              <div
                key={design.id}
                className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{design.design_name}</h3>
                <p className="text-muted-foreground mb-4">{design.description}</p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate(`/designs/${design.id}`)}
                >
                  View Design
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;