# Bullpen CRM = Twenty, minus branding

This fork runs Twenty one-to-one for Corgi Bullpen. The only intended difference from upstream is branding:
Corgi marks and favicons, Geist in place of Inter, the orange accent scale in place of blue, and the product
name "Bullpen" in titles, sign-in and emails. No behaviour changes are allowed in this fork.

Branch layout: `bullpen-vX.Y.Z` = upstream tag `twenty/vX.Y.Z` + the branding commits. To move to a new
upstream release: fetch the tag from twentyhq/twenty, `git checkout -B bullpen-vNEW twenty/vNEW`, cherry-pick
the branding commits from the previous bullpen branch, resolve the (usually zero) conflicts, build and deploy.

Build and run (black-sky): `docker buildx build --target twenty -f packages/twenty-docker/twenty/Dockerfile -t bullpen-crm:<tag> .`
then set that tag in `~/bullpen-crm/docker-compose.override.yml` and `docker compose up -d`.
