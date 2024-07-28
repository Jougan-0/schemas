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

/**
 * Meshery Models serve as a portable unit of packaging to define managed entities, their relationships, and capabilities.
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
  kind: ("action" | "mutate" | "interaction") & string;
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
