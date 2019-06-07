import React, { useEffect, useState } from "react";
import { getContentBpower } from "../../api/api";

export default function HomeNews() {
    const [content, setContent] = useState();

    useEffect(() => {
        const getContent = getContentBpower(14);
        getContent.then(res => setContent(res));
    }, []);
    if (!content) {
        return null;
    } else {
        return (
            <div>
                <h2>{content.text_1}</h2>
                <div>
                    <strong>{content.text_2}</strong>
                    <p>{content.text_3}</p>
                </div>
            </div>
        );
    }
}
