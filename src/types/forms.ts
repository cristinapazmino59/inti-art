export interface FormField {
    name: string;
    label: string;
    type: "text" | "email" | "password" | "number" | "tel" | "textarea" | "select";
    placeholder?: string;
    required?: boolean;
    validation?: {
      min?: number;
      max?: number;
      pattern?: RegExp;
      message?: string;
    };
    options?: Array<{
      value: string;
      label: string;
    }>;
  }
  
  export interface FormConfig {
    fields: FormField[];
    submitLabel: string;
    cancelLabel?: string;
  }