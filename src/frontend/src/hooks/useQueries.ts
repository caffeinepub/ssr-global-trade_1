import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Product } from "../backend";
import { useActor } from "./useActor";

export function useContactInfo() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["contactInfo"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getContactInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBusinessHours() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["businessHours"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getBusinessHours();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useWhatsAppLink() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["whatsappLink"],
    queryFn: async () => {
      if (!actor) return "https://wa.me/911234567890";
      return actor.getWhatsAppLink();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitQuoteRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      id: string;
      fullName: string;
      email: string;
      companyName: string;
      product: Product;
      requirements: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitQuoteRequest(
        data.id,
        data.fullName,
        data.email,
        data.companyName,
        data.product,
        data.requirements,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quoteRequests"] });
    },
  });
}
