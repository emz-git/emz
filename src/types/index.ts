import * as RadixAccordion from "@radix-ui/react-accordion";
import { ReactNode } from "react";

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface FormError {
  message: string;
  code?: string;
  field?: string;
}

// UI Component Types
export interface AccordionItemProps extends RadixAccordion.AccordionItemProps {
  title: string;
  loading?: boolean;
  error?: string;
  onExpand?: () => void;
}

// Layout Types
export interface LayoutProps {
  children: ReactNode;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
  icon?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: FormError;
  success: boolean;
}

// Utility Types
export type WithClassName<P = {}> = P & {
  className?: string;
};
