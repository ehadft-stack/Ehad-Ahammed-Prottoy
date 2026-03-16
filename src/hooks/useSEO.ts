import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: Record<string, any>;
}

export function useSEO({ title, description, keywords, schema }: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = `${title} | Filmic Prottoy`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update schema markup
    if (schema) {
      let scriptSchema = document.querySelector('script[id="schema-markup"]');
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.setAttribute('type', 'application/ld+json');
        scriptSchema.setAttribute('id', 'schema-markup');
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.textContent = JSON.stringify(schema);
    }

    return () => {
      // Cleanup schema on unmount to avoid duplicates
      const scriptSchema = document.querySelector('script[id="schema-markup"]');
      if (scriptSchema) {
        scriptSchema.remove();
      }
    };
  }, [title, description, keywords, schema]);
}
