import { EsLinter, StyleLinter } from './linter';
import type { ILintArgs, ILinterOpts } from './types';

export type { ILintArgs, ILinterOpts };

export default (opts: ILinterOpts, args: ILintArgs) => {
  if (!args.eslintOnly) {
    const stylelint = new StyleLinter(opts);
    stylelint.run(args);
  }

  if (!args.stylelintOnly) {
    const eslint = new EsLinter(opts);
    eslint.run(args);
  }

  return '@umijs/lint';
};
