import { execa } from 'execa';
export const getContributors = async (filePaths, cwd) => {
    const { stdout } = await execa('git', ['--no-pager', 'shortlog', '-nes', 'HEAD', '--', ...filePaths], {
        cwd,
        stdin: 'inherit',
    });
    return stdout
        .split('\n')
        .map((item) => item.trim().match(/^(\d+)\t(.*) <(.*)>$/))
        .filter((item) => item !== null)
        .map(([, commits, name, email]) => ({
        name,
        email,
        commits: Number.parseInt(commits, 10),
    }))
        .filter((item, index, self) => {
        // If one of the contributors is a "noreply" email address, and there's
        // already a contributor with the same name, it is very likely a duplicate,
        // so it can be removed.
        if (item.email.split('@')[1]?.match(/no-?reply/)) {
            const realIndex = self.findIndex((t) => t.name === item.name);
            if (realIndex !== index) {
                // Update the "real" contributor to also include the noreply's commits
                self[realIndex].commits += item.commits;
                return false;
            }
            return true;
        }
        return true;
    });
};
