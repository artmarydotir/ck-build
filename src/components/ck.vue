<template>
  <div class="padding-24">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    <div class="ck-edit" v-html="editorData">

    </div>
  </div>
</template>

<script>
// ⚠️ NOTE: We don't use @ckeditor/ckeditor5-build-classic any more!
// Since we're building CKEditor from source, we use the source version of ClassicEditor.
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// image
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
// text-alignment
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
// table
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
// fonts
import Font from '@ckeditor/ckeditor5-font/src/font';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
// heading
import Heading from '@ckeditor/ckeditor5-heading/src/heading';



export default {
    name: 'cKbuid',
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p> سلام من بیلد از سورس هستم.</p>',
            editorConfig: {
                plugins: [
                    EssentialsPlugin,
                    BoldPlugin,
                    ItalicPlugin,
                    LinkPlugin,
                    ParagraphPlugin,
                    EasyImage,
                    Image,
                    ImageToolbar,
                    ImageCaption,
                    ImageStyle,
                    Alignment,
                    Table, TableToolbar,
                    MediaEmbed,
                    Font,
                    FontFamily,
                    Heading
                ],
                toolbar: {
                    items: [
                        'bold',
                        'italic',
                        'link',
                        'heading',
                        'undo',
                        'redo',
                        '|',
                        'imageUpload',
                        'imageTextAlternative',
                        'imageStyle:full',
                        'imageStyle:side',
                        '|',
                        'alignment',
                        '|',
                        'tableColumn', 'tableRow', 'mergeTableCells',
                        'mediaEmbed',
                        '|',
                        'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
                    ],
                },
                fontFamily: {
                    options: [
                        'Vazir',
                        // 'Ubuntu, Arial, sans-serif',
                        // 'Ubuntu Mono, Courier New, Courier, monospace'
                    ]
                },
                table: {
                    contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
                },
                heading: {
                    options: [
                        { model: 'paragraph', title: 'پاراگراف', class: 'ck-heading_paragraph', viewClass: 'interview' },
                        { model: 'heading1', view: 'h1', title: 'سرتیتر یک', class: 'ck-heading_heading1' },
                        { model: 'heading2', view: 'h2', title: 'سرتیتر دوم', class: 'ck-heading_heading2' }
                    ]
                }
                // image: {
                //   toolbar: [ 'imageTextAlternative', '|', 'imageStyle:full', 'imageStyle:side' ]
                // }
            }
        };
    }
};
</script>

<style>
.ck-edit {
  margin: 32px auto;
  text-align: center;
  border: 1px solid rgb(60, 171, 190);
  background-color: rgb(191, 243, 247);
}
.padding-24 {
  padding: 24px;
}
</style>
