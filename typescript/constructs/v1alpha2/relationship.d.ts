/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * State of the entity in which the capability is applicable.
 */
export type InputString = ("declaration" | "instance")[];
export type From = {
  kind?: string;
  model?: HttpsSchemasMesheryIoModelJson1;
  /**
   * A valid semantic version string between 5 and 256 characters. The pattern allows for a major.minor.patch version followed by an optional pre-release tag like '-alpha' or '-beta.2' and an optional build metadata tag like '+build.1.
   */
  version?: string;
  match?: {
    /**
     * Defines paths which should be matched with 'kind'.
     */
    self?: string[];
    /**
     * Optional property which defines paths which should be matched with 'self'. Here 'kind' is valid Component 'kind' belonging to the above specifed model. eg: If model is Kubernetes, valid 'kind' are 'Pod', 'Secret'. If the value for all paths of 'self' & 'kind' along with the value of all paths inside 'to.match.self' & 'to.match.kind are equal then the component with 'kind' act as an binded component. eg: ClusterRole, ClusterRoleBinding and ServiceAccount. If the paths for ClusterRole & ClusterRoleBinding and ServiceAccount & ClusterRoleBinding are equal then ClusterRoleBinding acts as an binding. Make sure the 'kind' value in 'from' and 'to' should be equal.
     */
    kind?: string[];
  };
  patch?: {
    patchStrategy?: "replace";
    /**
     * JSON ref to value from where patch should be applied.
     */
    mutatorRef?: string[][];
  };
}[];
export type To = {
  kind?: string;
  model?: HttpsSchemasMesheryIoModelJson2;
  /**
   * A valid semantic version string between 5 and 256 characters. The pattern allows for a major.minor.patch version followed by an optional pre-release tag like '-alpha' or '-beta.2' and an optional build metadata tag like '+build.1.
   */
  version?: string;
  match?: {
    /**
     * Defines paths which should be matched with 'kind'.
     */
    self?: string[];
    /**
     * Optional property which defines paths which should be matched with 'self'. Here 'kind' is valid Component 'kind' belonging to the above specifed model. eg: If model is Kubernetes, valid 'kind' are 'Pod', 'Secret'. If the value for all paths of 'self' & 'kind' along with the value of all paths inside 'to.match.self' & 'to.match.kind are equal then the component with 'kind' act as an binded component. eg: ClusterRole, ClusterRoleBinding and ServiceAccount. If the paths for ClusterRole & ClusterRoleBinding and ServiceAccount & ClusterRoleBinding are equal then ClusterRoleBinding acts as an binding. Make sure the 'kind' value in 'from' and 'to' should be equal.
     */
    kind?: string[];
  };
  patch?: {
    patchStrategy?: "replace";
    /**
     * JSON ref to value that should be patched.
     */
    mutatedRef?: string;
  };
}[];

/**
 * Relationships define the nature of interaction between interconnected components in Meshery. The combination of relationship properties kind, type, and subtype characterize various genealogical relations among and between components. Relationships have selectors, selector sets, metadata, and optional parameters. Learn more at https://docs.meshery.io/concepts/logical/relationships.
 */
export interface HttpsSchemasMesheryIoRelationshipJson {
  /**
   * Specifies the version of the schema used for the definition.
   */
  schemaVersion: string;
  /**
   * Specifies the version of the definition.
   */
  version: string;
  /**
   * Kind of the Relationship.
   */
  kind: "hierarchical" | "edge" | "sibling";
  /**
   * Classification of relationships. Used to group relationships similar in nature.
   */
  type: string;
  /**
   * Used for further classification of Relationships. Type and SubType together identifies a Relationship.
   */
  subType: string;
  /**
   * Determines the policy rule to be used for the evaluation of the relationship.
   */
  evaluationQuery: string;
  /**
   * Metadata contains additional information associated with the Relationship.
   */
  metadata?: {
    /**
     * Description of the Relationship.
     */
    description?: string;
    [k: string]: unknown;
  };
  model: HttpsSchemasMesheryIoModelJson;
  /**
   * Selectors are organized as an array, with each item containing a distinct set of selectors that share a common functionality. This structure allows for flexibility in defining relationships, even when different components are involved.
   */
  selectors?: {
    /**
     * Optional selectors used to define relationships which should not be created / is restricted.
     */
    deny?: {
      from: From;
      to: To;
      [k: string]: unknown;
    };
    /**
     * Selectors used to define relationships which are allowed.
     */
    allow?: {
      from: From;
      to: To;
      [k: string]: unknown;
    };
  }[];
}
/**
 * Model of the Relationship.
 */
export interface HttpsSchemasMesheryIoModelJson {
  /**
   * Specifies the version of the schema used for the definition.
   */
  schemaVersion?: string;
  /**
   * Version of the model definition.
   */
  version: string;
  /**
   * The unique name for the model within the scope of a registrant.
   */
  name: string;
  /**
   * Human-readable name for the model.
   */
  displayName?: string;
  /**
   * Description of the model.
   */
  description?: string;
  /**
   * Status of model, including:
   * - duplicate: this component is a duplicate of another. The component that is to be the canonical reference and that is duplicated by other components should not be assigned the 'duplicate' status.
   * - maintenance: model is unavailable for a period of time.
   * - enabled: model is available for use for all users of this Meshery Server.
   * - ignored: model is unavailable for use for all users of this Meshery Server.
   */
  status?: "ignored" | "enabled" | "duplicate";
  registrant: {
    [k: string]: unknown;
  };
  /**
   * Category of the model.
   */
  category: string;
  /**
   * Sub-category of the model.
   */
  subCategory?: string;
  /**
   * Metadata containing additional information associated with the model.
   */
  metadata?: {
    /**
     * Capabilities associated with the model
     */
    capabilities?: HttpsSchemasMesheryIoCapabilityJson[];
    /**
     * Indicates whether the model and its entities should be treated as deployable entities or as logical representations.
     */
    isAnnotation?: boolean;
    /**
     * Primary color associated with the model.
     */
    primaryColor?: string;
    /**
     * Secondary color associated with the model.
     */
    secondaryColor?: string;
    /**
     * SVG representation of the model in white color.
     */
    svgWhite?: string;
    /**
     * SVG representation of the model in colored format.
     */
    svgColor?: string;
    /**
     * SVG representation of the complete model.
     */
    svgComplete?: string;
    [k: string]: unknown;
  };
  /**
   * Registrant-defined data associated with the model. Properties pertain to the software being managed (e.g. Kubernetes v1.31)
   */
  model?: {
    /**
     * Version of the model as defined by the registrant.
     */
    version: string;
    [k: string]: unknown;
  };
}
/**
 * Meshery manages entities in accordance with their specific capabilities. This field explicitly identifies those capabilities largely by what actions a given component supports; e.g. metric-scrape, sub-interface, and so on. This field is extensible. Entities may define a broad array of capabilities, which are in-turn dynamically interpretted by Meshery for full lifecycle management.
 */
export interface HttpsSchemasMesheryIoCapabilityJson {
  /**
   * Specifies the version of the schema to which the capability definition conforms.
   */
  schemaVersion: string;
  /**
   * Version of the capability definition.
   */
  version: string;
  /**
   * Name of the capability in human-readible format.
   */
  displayName: string;
  /**
   * A written representation of the purpose and characteristics of the capability.
   */
  description?: string;
  /**
   * Top-level categorization of the capability
   */
  kind: ("action" | "mutate" | "view" | "interaction") & string;
  /**
   * Classification of capabilities. Used to group capabilities similar in nature.
   */
  type: string;
  /**
   * Most granular unit of capability classification. The combination of Kind, Type and SubType together uniquely identify a Capability.
   */
  subType?: string;
  /**
   * Key that backs the capability.
   */
  key?: string;
  entityState?: InputString;
  /**
   * Status of the capability
   */
  status: "enabled" | "disabled";
  /**
   * Metadata contains additional information associated with the capability. Extension point.
   */
  metadata?: {
    [k: string]: unknown;
  };
}
/**
 * Model of the component. Learn more at https://docs.meshery.io/concepts/models
 */
export interface HttpsSchemasMesheryIoModelJson1 {
  /**
   * Specifies the version of the schema used for the definition.
   */
  schemaVersion?: string;
  /**
   * Version of the model definition.
   */
  version: string;
  /**
   * The unique name for the model within the scope of a registrant.
   */
  name: string;
  /**
   * Human-readable name for the model.
   */
  displayName?: string;
  /**
   * Description of the model.
   */
  description?: string;
  /**
   * Status of model, including:
   * - duplicate: this component is a duplicate of another. The component that is to be the canonical reference and that is duplicated by other components should not be assigned the 'duplicate' status.
   * - maintenance: model is unavailable for a period of time.
   * - enabled: model is available for use for all users of this Meshery Server.
   * - ignored: model is unavailable for use for all users of this Meshery Server.
   */
  status?: "ignored" | "enabled" | "duplicate";
  registrant: {
    [k: string]: unknown;
  };
  /**
   * Category of the model.
   */
  category: string;
  /**
   * Sub-category of the model.
   */
  subCategory?: string;
  /**
   * Metadata containing additional information associated with the model.
   */
  metadata?: {
    /**
     * Capabilities associated with the model
     */
    capabilities?: HttpsSchemasMesheryIoCapabilityJson[];
    /**
     * Indicates whether the model and its entities should be treated as deployable entities or as logical representations.
     */
    isAnnotation?: boolean;
    /**
     * Primary color associated with the model.
     */
    primaryColor?: string;
    /**
     * Secondary color associated with the model.
     */
    secondaryColor?: string;
    /**
     * SVG representation of the model in white color.
     */
    svgWhite?: string;
    /**
     * SVG representation of the model in colored format.
     */
    svgColor?: string;
    /**
     * SVG representation of the complete model.
     */
    svgComplete?: string;
    [k: string]: unknown;
  };
  /**
   * Registrant-defined data associated with the model. Properties pertain to the software being managed (e.g. Kubernetes v1.31)
   */
  model?: {
    /**
     * Version of the model as defined by the registrant.
     */
    version: string;
    [k: string]: unknown;
  };
}
/**
 * Model of the component. Learn more at https://docs.meshery.io/concepts/models
 */
export interface HttpsSchemasMesheryIoModelJson2 {
  /**
   * Specifies the version of the schema used for the definition.
   */
  schemaVersion?: string;
  /**
   * Version of the model definition.
   */
  version: string;
  /**
   * The unique name for the model within the scope of a registrant.
   */
  name: string;
  /**
   * Human-readable name for the model.
   */
  displayName?: string;
  /**
   * Description of the model.
   */
  description?: string;
  /**
   * Status of model, including:
   * - duplicate: this component is a duplicate of another. The component that is to be the canonical reference and that is duplicated by other components should not be assigned the 'duplicate' status.
   * - maintenance: model is unavailable for a period of time.
   * - enabled: model is available for use for all users of this Meshery Server.
   * - ignored: model is unavailable for use for all users of this Meshery Server.
   */
  status?: "ignored" | "enabled" | "duplicate";
  registrant: {
    [k: string]: unknown;
  };
  /**
   * Category of the model.
   */
  category: string;
  /**
   * Sub-category of the model.
   */
  subCategory?: string;
  /**
   * Metadata containing additional information associated with the model.
   */
  metadata?: {
    /**
     * Capabilities associated with the model
     */
    capabilities?: HttpsSchemasMesheryIoCapabilityJson[];
    /**
     * Indicates whether the model and its entities should be treated as deployable entities or as logical representations.
     */
    isAnnotation?: boolean;
    /**
     * Primary color associated with the model.
     */
    primaryColor?: string;
    /**
     * Secondary color associated with the model.
     */
    secondaryColor?: string;
    /**
     * SVG representation of the model in white color.
     */
    svgWhite?: string;
    /**
     * SVG representation of the model in colored format.
     */
    svgColor?: string;
    /**
     * SVG representation of the complete model.
     */
    svgComplete?: string;
    [k: string]: unknown;
  };
  /**
   * Registrant-defined data associated with the model. Properties pertain to the software being managed (e.g. Kubernetes v1.31)
   */
  model?: {
    /**
     * Version of the model as defined by the registrant.
     */
    version: string;
    [k: string]: unknown;
  };
}
