import CMS from "@staticcms/core";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.scss";

import HomePreview from "./cms-preview-templates/homepage";
import BiographyPreview from "./cms-preview-templates/biography";
import ArtworkPreview from "./cms-preview-templates/artwork";


CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("bio", BiographyPreview);
CMS.registerPreviewTemplate("fables", ArtworkPreview);
CMS.registerPreviewTemplate("ikons", ArtworkPreview);
CMS.registerPreviewTemplate("untitled", ArtworkPreview);
CMS.registerPreviewTemplate("miscellaneous", ArtworkPreview);
CMS.registerPreviewTemplate("collections", ArtworkPreview);
CMS.init();
