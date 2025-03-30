// types/global.d.ts
interface Window {
  elfsight?: {
    reinitWidgets: () => void;
  };
}

declare module "sanity/structure" {
  import { ComponentType } from "react";

  export interface StructureResolverContext {
    currentUser: { email: string; name: string; id: string };
    dataset: string;
    projectId: string;
  }

  export interface StructureResolverOptions {
    documentId?: string;
    documentType?: string;
    id?: string;
    path?: string;
    template?: string;
  }

  export type StructureResolver = (
    S: StructureBuilder,
    context: StructureResolverContext,
  ) => ListBuilder;

  export interface StructureToolOptions {
    structure?:
      | StructureResolver
      | { name: string; title: string; options?: any };
    defaultDocumentNode?: (
      S: StructureBuilder,
      context: { documentId: string; documentType: string },
    ) => DocumentBuilder;
    serializers?: {
      listItem?: (item: any) => any;
      child?: (item: any) => any;
    };
  }

  export function structureTool(options: StructureToolOptions): {
    name: string;
    component: ComponentType<any>;
  };

  export class StructureBuilder {
    list(): ListBuilder;
    listItem(): ListItemBuilder;
    documentTypeList(documentType: string): ListBuilder;
    documentTypeListItem(documentType: string): ListItemBuilder;
    documentTypeListItems(documentTypes?: string[]): ListItemBuilder[];
    editor(): DocumentBuilder;
    view(): ViewBuilder;
    component(component: ComponentType<any>): ComponentBuilder;
    divider(): ListItemBuilder;
  }

  export class ListBuilder {
    id(id: string): this;
    title(title: string): this;
    icon(icon: ComponentType<any>): this;
    items(
      items: Array<ListItemBuilder | ComponentBuilder | DocumentBuilder>,
    ): this;
    menuItems(items: any[]): this;
    defaultLayout(layout: string): this;
    child(
      resolver: (
        documentId: string,
      ) => ListBuilder | DocumentBuilder | ComponentBuilder,
    ): this;
    canHandleIntent(
      intentName: string,
      params: Record<string, any>,
      options: StructureResolverOptions,
    ): boolean;
    getItems(): (ListItemBuilder | ComponentBuilder | DocumentBuilder)[];
    getMenuItems(): any[];
  }

  export class ListItemBuilder {
    id(id: string): this;
    getId(): string | undefined;
    title(title: string): this;
    icon(icon: ComponentType<any>): this;
    child(
      child:
        | ListBuilder
        | DocumentBuilder
        | ComponentBuilder
        | ((
            documentId?: string,
          ) => ListBuilder | DocumentBuilder | ComponentBuilder),
    ): this;
    schemaType(schemaType: string): this;
    showIcon(showIcon?: boolean): this;
  }

  export class DocumentBuilder {
    id(id: string): this;
    documentId(documentId: string): this;
    schemaType(schemaType: string): this;
    title(title: string): this;
    views(views: ViewBuilder[]): this;
    actions(actions: any[]): this;
    hide(hideAction: string | { id: string }): this;
  }

  export class ViewBuilder {
    id(id: string): this;
    title(title: string): this;
    icon(icon: ComponentType<any>): this;
    component(component: ComponentType<any>): this;
  }

  export class ComponentBuilder {
    id(id: string): this;
    title(title: string): this;
    icon(icon: ComponentType<any>): this;
    component(component: ComponentType<any>): this;
  }
}
