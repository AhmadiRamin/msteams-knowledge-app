import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/knowledgeAppTab/index.html")
@PreventIframe("/knowledgeAppTab/config.html")
@PreventIframe("/knowledgeAppTab/remove.html")
export class KnowledgeAppTab {
}
