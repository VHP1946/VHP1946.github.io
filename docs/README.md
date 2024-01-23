"Homepage" for VHP technical documentation

[VHP HOME] | [CHANGELOG] | [VHP PORTAL] | [DEV PORTAL]

[RR Quoter](../VAD-RRQuoter)


## Process
* Each repo to be tracked needs to have Pages enabled (requires Owner of Organization or Project)
* Each repo will monitor a certain branch and only update its page when that branch is updated (most likely "main")
* This repo acts as the main codebase for the "website"
    * index.html acts like any other webpage
    * links to other repos will need to be manually added
    * updating the "homepage" requires updating this repo


## Notes
* Repo orginization and documentation should be standardized, or all this becomes a mess
    * Only Admin can create new repos
    * Standard naming conventions
    * Only Admin can push to "main"
    * Commenting, README and CHANGELOG should always be consistantly kept up to date
* We can look in to having each page only update when the README is updated (via GitHub Actions)
* Be patient! It can take up to 10 mins for an update to publish
* THIS IS A PUBLIC WEBSITE! Access can be restricted in various ways. 
    * Whatever strategy we decide on this, I can probably make it happen
* Could be used as a user guide, but Jira Portal is still probably better for that


## Internal Links
* VHP's standards and requirements


## External Links
* Good GitHub practices (branching)
* Good coding practices


[VHP HOME]: http://vhp1946.github.io
[CHANGELOG]: ./CHANGELOG.md
[VHP PORTAL]: https://vhpportal.com/
[DEV PORTAL]: http://dev.vhpportal.com/