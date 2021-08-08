import React from "react";
import TagBadge, {tagsList} from "components/TagBadge";
import "scss/modules/TagList.module.scss"

const TagList: React.FC = () => {
    return (
        <>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="accordion-tag-headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-tag-collapseOne"
                        >
                            Tags
                        </button>
                    </h2>
                    <div
                        id="accordion-tag-collapseOne"
                        className="accordion-collapse collapse"
                    >
                        <div className="accordion-body">
                            {
                                tagsList.map(({tagName, count}) => (
                                    <TagBadge tagName={tagName} count={count} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TagList;