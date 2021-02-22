import image from './assets/mountain.jpg'
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock } from './classes/blocks'

const text = 'Как вам река с названием Лягающая лошадь? А Хохочущий водопад? А водопад «Вот здорово!»? Не правда ли, оригинальные имена? Их можно встретить в парке Йохо, который в переводе с языка индейцев означает «Вот это да!». Он расположен в Скалистых горах на полутора тысячах квадратных километрах. И здесь действительно много поводов для удивления.'

export const model = [
    new TitleBlock('Национальный парк Йохо', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #399ce3, #0e3f99)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imageStyles: {
            width: '600px',
            height: 'auto'
        },
        alt: 'Это изображение'
    }),
    new ColumnsBlock([
        'Изумрудное озеро оправдывает свое название — вода в нем ярко-зеленая. В ясную солнечную погода водная гладь похожа на огромное зеркало. Правда, купаться здесь не особо комфортно, так как вода поступает от ледников.',
        'Животный мир Йохо представлен лосями, оленями, барсуками, белками, медведями, косулями. Также здесь водится более 180 видов птиц.',
        'Водопад «Вот здорово!» на самом деле называется на индейском наречии Такаккоу. Он летит вниз с высоты 381 метр. Стоит отметить, что живет он исключительно в теплые дни, так как питается тающим льдом.'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #0e72b0, #50b4f2)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #0af07d, #0cdaed)',
            padding: '1rem',
            'font-weight': 'bold',
            color: '#fff',
        }
    })
]