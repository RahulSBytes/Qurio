'use client'

import type { ForwardedRef } from 'react'
import {
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    codeBlockPlugin,
    codeMirrorPlugin,
    MDXEditor,
    type MDXEditorMethods,
    type MDXEditorProps,
    toolbarPlugin,
    ConditionalContents,
    ChangeCodeMirrorLanguage,
    UndoRedo,
    Separator,
    BoldItalicUnderlineToggles,
    ListsToggle,
    CreateLink,
    InsertImage,
    InsertTable,
    InsertThematicBreak,
    InsertCodeBlock,
    tablePlugin,
    linkPlugin,
    linkDialogPlugin,
    imagePlugin,
    diffSourcePlugin
} from '@mdxeditor/editor'

import { basicDark } from 'cm6-theme-basic-dark';
import { useTheme } from 'next-themes';
import '@mdxeditor/editor/style.css'
import './dark-editor.css'

interface Props extends Omit<MDXEditorProps, 'onChange' | 'markdown'> {
    value: string;
    fieldChange: (value: string) => void;
    editorRef?: ForwardedRef<MDXEditorMethods>;
}

function Editor({
    value,
    editorRef,
    fieldChange,
    ...props
}: Props) {

    const { resolvedTheme } = useTheme();
    const theme = resolvedTheme === 'dark' ? [basicDark] : [];

return (
    <MDXEditor
        key={resolvedTheme}
        ref={editorRef}
        markdown={value}
        className='background-light800_dark200 light-border-2 markdown-editor dark-editor w-full border'
        onChange={fieldChange}
        plugins={[
        headingsPlugin(),
        listsPlugin(),
        listsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin(),
        codeBlockPlugin({defaultCodeBlockLanguage : ""}),
        tablePlugin(),
        codeMirrorPlugin({
            codeBlockLanguages : {
                css:'css',
                txt:'txt',
                sql:'sql',
                js:'javascript',
                ts:'typescript',
                saas:'saas',
                "":"unspecified",
                tsx : 'Typescript (React)',
                jsx : 'Javascript (React)'

            },
            autoLoadLanguageSupport: true,
            codeMirrorExtensions: theme,
                }),
                diffSourcePlugin({viewMode : 'rich-text', diffMarkdown: ''}),
                quotePlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin(),
                toolbarPlugin({
                    toolbarContents : ()=> {
                        return  <ConditionalContents 
                        options={
                            [
                                {
                                    when: (editor) => editor?.editorType ==="codeblock",
                                    contents : ()=> <ChangeCodeMirrorLanguage/>
                                },
                                {
        fallback : ()=> (
            <>
            <UndoRedo/>
            <Separator/>
            <BoldItalicUnderlineToggles/>
            <Separator/>
            <ListsToggle/>
            <Separator/>
            <CreateLink/>
            <InsertImage/>
            <Separator/>
            <InsertTable/>
            <InsertThematicBreak/>
            <InsertCodeBlock/>
            </>
        )
                                }
                            ]
                        }
                        />
                    }
                }),
            ]}
            {...props}
        />
    )
}

export default Editor