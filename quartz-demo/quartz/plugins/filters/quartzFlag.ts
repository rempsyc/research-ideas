import { QuartzFilterPlugin } from "../types"

export const RemoveQuartzExcluded: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveQuartzExcluded",
  shouldPublish(_ctx, [_tree, vfile]) {
    const quartzFlag = vfile.data?.frontmatter?.quartz
    return quartzFlag !== false && quartzFlag !== "false"
  },
})
