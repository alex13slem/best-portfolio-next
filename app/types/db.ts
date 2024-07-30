export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      main_info: {
        Row: {
          about_hero: string;
          email: string;
          hero_epithets: string[];
          hero_greeting: string;
          id: number;
          open_graph_image: string;
          phone: string;
          site_description: string;
          site_name: string;
        };
        Insert: {
          about_hero: string;
          email: string;
          hero_epithets: string[];
          hero_greeting: string;
          id?: number;
          open_graph_image: string;
          phone: string;
          site_description: string;
          site_name: string;
        };
        Update: {
          about_hero?: string;
          email?: string;
          hero_epithets?: string[];
          hero_greeting?: string;
          id?: number;
          open_graph_image?: string;
          phone?: string;
          site_description?: string;
          site_name?: string;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          body: string;
          description: string;
          github_link: string;
          id: number;
          name: string;
          role: string;
          site_link: string;
          slug: string;
          thumbnail_greeting: string;
          thumbnail_preview: string;
        };
        Insert: {
          body: string;
          description: string;
          github_link: string;
          id?: number;
          name: string;
          role: string;
          site_link: string;
          slug: string;
          thumbnail_greeting: string;
          thumbnail_preview: string;
        };
        Update: {
          body?: string;
          description?: string;
          github_link?: string;
          id?: number;
          name?: string;
          role?: string;
          site_link?: string;
          slug?: string;
          thumbnail_greeting?: string;
          thumbnail_preview?: string;
        };
        Relationships: [];
      };
      socials: {
        Row: {
          iconify_id: string;
          id: number;
          name: string;
          slug: string;
          url: string;
        };
        Insert: {
          iconify_id: string;
          id?: number;
          name: string;
          slug: string;
          url: string;
        };
        Update: {
          iconify_id?: string;
          id?: number;
          name?: string;
          slug?: string;
          url?: string;
        };
        Relationships: [];
      };
      technologies: {
        Row: {
          body: string;
          description: string;
          iconify_id: string;
          id: number;
          image: string;
          link: string;
          name: string;
          slug: string;
        };
        Insert: {
          body: string;
          description: string;
          iconify_id: string;
          id?: number;
          image: string;
          link: string;
          name: string;
          slug: string;
        };
        Update: {
          body?: string;
          description?: string;
          iconify_id?: string;
          id?: number;
          image?: string;
          link?: string;
          name?: string;
          slug?: string;
        };
        Relationships: [];
      };
      technologies_to_projects: {
        Row: {
          project_id: number;
          technology_id: number;
        };
        Insert: {
          project_id: number;
          technology_id: number;
        };
        Update: {
          project_id?: number;
          technology_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'technologies_to_projects_project_id_projects_id_fk';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'projects';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'technologies_to_projects_technology_id_technologies_id_fk';
            columns: ['technology_id'];
            isOneToOne: false;
            referencedRelation: 'technologies';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      update_technologies_to_projects: {
        Args: {
          p_project_id: number;
          p_technology_ids: number[];
        };
        Returns: undefined;
      };
    };
    Enums: {
      socials_enum: 'vk' | 'telegram' | 'github' | 'discord' | 'hh';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never;
