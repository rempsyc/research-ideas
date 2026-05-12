# Build or preview the Quartz research ideas garden from RStudio.
#
# Usage:
# 1. Open this file in RStudio.
# 2. Click Source to preview the site locally.
# 3. Set serve <- FALSE below if you only want to build _site/.

serve <- TRUE

if (requireNamespace("rstudioapi", quietly = TRUE) && rstudioapi::isAvailable()) {
  source_path <- rstudioapi::getSourceEditorContext()$path
} else {
  source_path <- ""
}

repo_root <- if (nzchar(source_path)) {
  dirname(normalizePath(source_path, winslash = "/", mustWork = TRUE))
} else {
  normalizePath(getwd(), winslash = "/", mustWork = TRUE)
}
quartz_dir <- file.path(repo_root, "quartz-demo")
garden_dir <- file.path(repo_root, "garden")
site_dir <- file.path(repo_root, "_site")

if (!dir.exists(quartz_dir)) {
  stop("Could not find quartz-demo/ from: ", repo_root)
}

if (!dir.exists(garden_dir)) {
  stop("Could not find garden/ from: ", repo_root)
}

old_wd <- getwd()
on.exit(setwd(old_wd), add = TRUE)
setwd(quartz_dir)

if (!dir.exists("node_modules")) {
  message("Installing Quartz dependencies with npm ci...")
  status <- system2("npm", "ci")
  if (!identical(status, 0L)) {
    stop("npm ci failed. Check the RStudio Console for details.")
  }
}

args <- c("quartz", "build", "-d", garden_dir)

if (serve) {
  args <- c(args, "--serve")
  message("Starting local preview. Open http://localhost:8080 if it does not open automatically.")
} else {
  args <- c(args, "-o", site_dir)
  message("Building site to: ", site_dir)
}

status <- system2("npx", args)

if (!identical(status, 0L)) {
  stop("Quartz build failed. Check the RStudio Console for details.")
}
