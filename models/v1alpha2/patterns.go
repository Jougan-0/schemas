// Package core provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/oapi-codegen/oapi-codegen/v2 version v2.3.0 DO NOT EDIT.
package v1alpha2

import "github.com/gofrs/uuid"

// Defines values for CatalogDataCompatibility.
const (
	Kubernetes CatalogDataCompatibility = "kubernetes"
)

// Defines values for CatalogDataContentClass.
const (
	Community CatalogDataContentClass = "community"
	Official  CatalogDataContentClass = "official"
	Verified  CatalogDataContentClass = "verified"
)

// Defines values for CatalogDataType.
const (
	Deployment        CatalogDataType = "Deployment"
	Observability     CatalogDataType = "Observability"
	Resiliency        CatalogDataType = "Resiliency"
	Scaling           CatalogDataType = "Scaling"
	Security          CatalogDataType = "Security"
	TrafficManagement CatalogDataType = "Traffic-management"
	Troubleshooting   CatalogDataType = "Troubleshooting"
	Workloads         CatalogDataType = "Workloads"
)

// CatalogData defines model for catalog_data.
type CatalogData struct {
	// Compatibility One or more models associated with this catalog item. For designs, a list of one or more models implicated by components within the design. For models, this is self-referential.
	Compatibility []CatalogDataCompatibility `json:"compatibility"`

	// ContentClass Published content is classifed by its support level. Content classes help you understand the origin and expected support level for each piece of content. It is important to note that the level of support may vary within each class, and you should exercise discretion when using community-contributed content. Content produced and fully supported by Meshery maintainers. This represents the highest level of support and is considered the most reliable. Content produced by partners and verified by Meshery maintainers. While not directly maintained by Meshery, it has undergone a verification process to ensure quality and compatibility. Content produced and supported by the respective project or organization responsible for the specific technology. This class offers a level of support from the project maintainers themselves. Content produced and shared by Meshery users. This includes a wide range of content, such as performance profiles, test results, filters, patterns, and applications. Community content may have varying levels of support and reliability.
	Class CatalogDataContentClass `json:"class,omitempty"`

	// PatternCaveats Specific stipulations to consider and known behaviors to be aware of when using this design.
	PatternCaveats string `json:"pattern_caveats"`

	// PatternInfo Purpose of the design along with its intended and unintended uses.
	PatternInfo string `json:"pattern_info"`

	// PublishedVersion Tracks the specific content version that has been made available in the Catalog.
	PublishedVersion *string `json:"publishedVersion,omitempty"`

	// SnapshotURL Contains reference to the dark and light mode snapshots of the design.
	SnapshotURL []string `json:"snapshotURL,omitempty"`

	// Type Categorization of the type of design or operational flow depicted in this design.
	Type CatalogDataType `json:"type"`
}

// CatalogDataCompatibility defines model for CatalogData.Compatibility.
type CatalogDataCompatibility string

// CatalogDataContentClass Published content is classifed by its support level. Content classes help you understand the origin and expected support level for each piece of content. It is important to note that the level of support may vary within each class, and you should exercise discretion when using community-contributed content. Content produced and fully supported by Meshery maintainers. This represents the highest level of support and is considered the most reliable. Content produced by partners and verified by Meshery maintainers. While not directly maintained by Meshery, it has undergone a verification process to ensure quality and compatibility. Content produced and supported by the respective project or organization responsible for the specific technology. This class offers a level of support from the project maintainers themselves. Content produced and shared by Meshery users. This includes a wide range of content, such as performance profiles, test results, filters, patterns, and applications. Community content may have varying levels of support and reliability.
type CatalogDataContentClass string

// CatalogDataType Categorization of the type of design or operational flow depicted in this design.
type CatalogDataType string

// DeletePatternModel defines model for deletePatternModel.
type DeletePatternModel struct {
	ID   ID   `db:"id" json:"id"`
	Name Text `json:"name,omitempty"`
}

type Service struct {
	Annotations  map[string]string      `json:"annotations,omitempty"`
	ApiVersion   string                 `json:"apiVersion,omitempty" yaml:"apiVersion"`
	DependsOn    []string               `json:"dependsOn,omitempty" yaml:"dependsOn"`
	Id           *uuid.UUID             `json:"id,omitempty"`
	IsAnnotation *bool                  `json:"isAnnotation,omitempty" yaml:"isAnnotation"`
	Labels       map[string]string      `json:"labels,omitempty"`
	Model        string                 `json:"model,omitempty"`
	Name         string                 `json:"name,omitempty"`
	Namespace    string                 `json:"namespace,omitempty"`
	Settings     map[string]interface{} `json:"settings,omitempty"`
	Traits       map[string]interface{} `json:"traits,omitempty"`
	Type         string                 `json:"type,omitempty"`
	Version      string                 `json:"version,omitempty"`
}

// Design Schema for design  in v1Beta1
type PatternFile struct {
	// Name Name of the design
	Name string `json:"name"`

	PatternID string `yaml:"patternID,omitempty" json:"patternID,omitempty"`

	// Version Version of the design
	Version string `json:"version,omitempty"`

	Vars map[string]interface{} `yaml:"vars,omitempty" json:"vars,omitempty"`

	// Services Map of component IDs/names to their corresponding component declarations
	Services map[string]*Service `json:"services"`
}

// MesheryPattern defines model for mesheryPattern.
type MesheryPattern struct {
	CatalogData *CatalogData `json:"catalog_data,omitempty"`
	CreatedAt   Time         `json:"created_at,omitempty"`
	ID          ID           `db:"id" json:"id"`
	Location    MapObject    `json:"location,omitempty"`
	Name        Text         `json:"name,omitempty"`

	// PatternFile Schema for design  in v1Beta1
	PatternFile *PatternFile `json:"pattern_file,omitempty"`
	UpdatedAt   Time         `json:"updated_at,omitempty"`
	UserID      ID           `db:"user_id" json:"user_id"`
	Visibility  Text         `json:"visibility,omitempty"`
}

// MesheryPatternPage defines model for mesheryPatternPage.
type MesheryPatternPage struct {
	Page       int               `json:"page,omitempty"`
	PageSize   int               `json:"page_size,omitempty"`
	Patterns   *[]MesheryPattern `json:"patterns,omitempty"`
	ResultType string            `json:"resultType,omitempty"`
	TotalCount int               `json:"total_count,omitempty"`
}

// MesheryPatternResource defines model for mesheryPatternResource.
type MesheryPatternResource struct {
	CreatedAt Time  `json:"created_at,omitempty"`
	Deleted   *bool `json:"deleted,omitempty"`
	ID        ID    `db:"id" json:"id"`
	Name      Text  `json:"name,omitempty"`
	Namepace  Text  `json:"namepace,omitempty"`
	OamType   Text  `json:"oam_type,omitempty"`
	Type      Text  `json:"type,omitempty"`
	UpdatedAt Time  `json:"updated_at,omitempty"`
	UserID    ID    `db:"user_id" json:"user_id"`
}

// MesheryPatternResourcePage defines model for mesheryPatternResourcePage.
type MesheryPatternResourcePage struct {
	Page       int                       `json:"page,omitempty"`
	PageSize   int                       `json:"page_size,omitempty"`
	Resources  *[]MesheryPatternResource `json:"resources,omitempty"`
	ResultType string                    `json:"resultType,omitempty"`
	TotalCount int                       `json:"total_count,omitempty"`
}

// Id defines model for id.
type Id = string

// Name defines model for name.
type Name = string

// Namespace defines model for namespace.
type Namespace = string

// OamType defines model for oamType.
type OamType = string

// Order defines model for order.
type Order = string

// Page defines model for page.
type Page = string

// PageSize defines model for page_size.
type PageSize = string

// Search defines model for search.
type Search = string

// Type defines model for type.
type Type = string

// DesignShare defines model for designShare.
type DesignShare struct {
	ContentType string `json:"content_type"`
	Emails      Emails `json:"emails"`
	ID          ID     `db:"id" json:"id"`
	Share       bool   `json:"share"`
}

// MesheryPatternDeleteRequestBody defines model for mesheryPatternDeleteRequestBody.
type MesheryPatternDeleteRequestBody struct {
	Patterns *[]DeletePatternModel `json:"patterns,omitempty"`
}

// MesheryPatternRequestBody defines model for mesheryPatternRequestBody.
type MesheryPatternRequestBody struct {
	Path        Text            `json:"path,omitempty"`
	PatternData *MesheryPattern `json:"pattern_data,omitempty"`
	Save        *bool           `json:"save,omitempty"`
	Url         Text            `json:"url,omitempty"`
}

// HandleShareJSONBody defines parameters for HandleShare.
type HandleShareJSONBody struct {
	ContentType string `json:"content_type"`
	Emails      Emails `json:"emails"`
	ID          ID     `db:"id" json:"id"`
	Share       bool   `json:"share"`
}

// DeletePatternsJSONBody defines parameters for DeletePatterns.
type DeletePatternsJSONBody struct {
	Patterns *[]DeletePatternModel `json:"patterns,omitempty"`
}

// GetPatternsParams defines parameters for GetPatterns.
type GetPatternsParams struct {
	// Page Get reponses by page
	Page *Page `form:"page,omitempty" json:"page,omitempty"`

	// PageSize Get reponses by pageSize
	PageSize *PageSize `form:"page_size,omitempty" json:"page_size,omitempty"`

	// Search Get responses that match search param value
	Search *Search `form:"search,omitempty" json:"search,omitempty"`

	// Order Get ordered responses
	Order *Order `form:"order,omitempty" json:"order,omitempty"`
}

// UpsertPatternJSONBody defines parameters for UpsertPattern.
type UpsertPatternJSONBody struct {
	Path        Text            `json:"path,omitempty"`
	PatternData *MesheryPattern `json:"pattern_data,omitempty"`
	Save        *bool           `json:"save,omitempty"`
	Url         Text            `json:"url,omitempty"`
}

// ClonePatternJSONBody defines parameters for ClonePattern.
type ClonePatternJSONBody struct {
	Name string `json:"name"`
}

// GetPatternResourcesParams defines parameters for GetPatternResources.
type GetPatternResourcesParams struct {
	// Page Get reponses by page
	Page *Page `form:"page,omitempty" json:"page,omitempty"`

	// PageSize Get reponses by pageSize
	PageSize *PageSize `form:"page_size,omitempty" json:"page_size,omitempty"`

	// Search Get responses that match search param value
	Search *Search `form:"search,omitempty" json:"search,omitempty"`

	// Order Get ordered responses
	Order *Order `form:"order,omitempty" json:"order,omitempty"`

	// Namespace Namespace
	Namespace *Namespace `form:"namespace,omitempty" json:"namespace,omitempty"`

	// Type Type
	Type *Type `form:"type,omitempty" json:"type,omitempty"`

	// OamType OAM type
	OamType *OamType `form:"oamType,omitempty" json:"oamType,omitempty"`

	// Name Name of the resource
	Name *Name `form:"name,omitempty" json:"name,omitempty"`
}

// HandleShareJSONRequestBody defines body for HandleShare for application/json ContentType.
type HandleShareJSONRequestBody HandleShareJSONBody

// DeletePatternsJSONRequestBody defines body for DeletePatterns for application/json ContentType.
type DeletePatternsJSONRequestBody DeletePatternsJSONBody

// UpsertPatternJSONRequestBody defines body for UpsertPattern for application/json ContentType.
type UpsertPatternJSONRequestBody UpsertPatternJSONBody

// ClonePatternJSONRequestBody defines body for ClonePattern for application/json ContentType.
type ClonePatternJSONRequestBody ClonePatternJSONBody

// UpsertPatternResourceJSONRequestBody defines body for UpsertPatternResource for application/json ContentType.
type UpsertPatternResourceJSONRequestBody = MesheryPatternResource
