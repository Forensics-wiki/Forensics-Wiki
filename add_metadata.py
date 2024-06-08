# 本脚本是为了给docs文件夹中的 .md 文件 一键添加开启评论的指令

# -*- coding: utf-8 -*-

import os

metadata_line = '---\ncomments: true\n---\n'

def add_metadata_to_file(file_path):
    with open(file_path, 'r+', encoding='utf-8') as file:
        content = file.read()
        if not content.startswith('---'):
            file.seek(0, 0)
            file.write(metadata_line + '\n' + content)

def add_metadata_to_md_files(directory):
    for foldername, subfolders, filenames in os.walk(directory):
        for filename in filenames:
            if filename.endswith('.md'):
                file_path = os.path.join(foldername, filename)
                add_metadata_to_file(file_path)

if __name__ == '__main__':
    target_directory = 'docs'  # 指定你的Markdown文件所在的目录
    add_metadata_to_md_files(target_directory)
