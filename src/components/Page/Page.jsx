import { Link } from 'react-router-dom';
import marked from 'marked';
import './Page.scss';
import { useEffect, useState } from 'react';

export const Page = (props) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        const pageContentsPath = props.pagePath;

        fetch(pageContentsPath)
            .then((response) => response.text())
            .then((text) => setMarkdown(marked(text)));
    }, [props.pagePath]);
    return (
        <div className='page'>
            <div className='page__wrapper'>
                <div className='page__controls'>
                    <Link
                        className='page__control-icon page__control-icon--close'
                        to='/'
                    />
                </div>
                <div className='page__background'></div>
                <div
                    className='page__content'
                    dangerouslySetInnerHTML={{ __html: markdown }}
                ></div>
            </div>
        </div>
    );
};
