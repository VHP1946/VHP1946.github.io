# Technical Knowledge Base README

## Process
* Each repo to be tracked needs to have Pages enabled (requires Owner of Organization or Project)
* Each repo will monitor a certain branch and only update its page when that branch is updated (most likely "dev")
* This repo acts as the main codebase for the "website"
    * index.html acts like any other webpage
    * links to other repos will need to be manually added
    * updating the "homepage" requires updating this repo


## Notes
* Repo orginization and documentation should be standardized, or all this becomes a mess
    * Only Admin can create new repos
    * Standard naming conventions
    * Only Admin can push to "dev"
    * Commenting, README and CHANGELOG should always be consistantly kept up to date
* We can look in to having each page only update when the README is updated (via GitHub Actions)
* Be patient! It can take up to 10 mins for an update to publish
* THIS IS A PUBLIC WEBSITE! Access can be restricted in various ways. 
    * Whatever strategy we decide on this, I can probably make it happen
* Could be used as a user guide, but Jira Portal is still probably better for that
* Jekyll (the Renderer) sets "home" to either index.md/html or README.md/html
    * It will only take ONE of these, the second one is not rendered at all


## Internal Links
* VHP's standards and requirements


## External Links
* Good GitHub practices (branching)
* Good coding practices