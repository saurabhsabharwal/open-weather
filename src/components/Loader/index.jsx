import React from 'react';

const Loader = () => {
    return (
        <>
            <svg
                width="64px"
                height="64px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <g transform="translate(76,50)">
                    <g transform="rotate(0)">
                        <circle cx="0" cy="0" r="4" fill="#93bf46" fillOpacity="1">
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                begin="-0.875s"
                                values="1.5 1.5;1 1"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="fill-opacity"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                                values="1;0"
                                begin="-0.875s"
                            />
                        </circle>
                    </g>
                </g>
                <g transform="translate(68.38477631085024,68.38477631085024)">
                    <g transform="rotate(45)">
                        <circle cx="0" cy="0" r="4" fill="#93bf46" fillOpacity="0.875">
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                begin="-0.75s"
                                values="1.5 1.5;1 1"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="fill-opacity"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                                values="1;0"
                                begin="-0.75s"
                            />
                        </circle>
                    </g>
                </g>
                <g transform="translate(50,76)">
                    <g transform="rotate(90)">
                        <circle cx="0" cy="0" r="4" fill="#93bf46" fillOpacity="0.75">
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                begin="-0.625s"
                                values="1.5 1.5;1 1"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="fill-opacity"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                                values="1;0"
                                begin="-0.625s"
                            />
                        </circle>
                    </g>
                </g>
                <g transform="translate(31.615223689149765,68.38477631085024)">
                    <g transform="rotate(135)">
                        <circle cx="0" cy="0" r="4" fill="#93bf46" fillOpacity="0.625">
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                begin="-0.5s"
                                values="1.5 1.5;1 1"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="fill-opacity"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                                values="1;0"
                                begin="-0.5s"
                            />
                        </circle>
                    </g>
                </g>
                <g transform="translate(24,50)">
                    <g transform="rotate(180)">
                        <circle cx="0" cy="0" r="4" fill="#93bf46" fillOpacity="0.5">
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                begin="-0.375s"
                                values="1.5 1.5;1 1"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="fill-opacity"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                                values="1;0"
                                begin="-0.375s"
                            />
                        </circle>
                    </g>
                </g>
                <g transform="translate(31.61522368914976,31.615223689149765)">
                    <g transform="rotate(225)">
                        <circle cx="0" cy="0" r="4" fill="#93bf46" fillOpacity="0.375">
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                begin="-0.25s"
                                values="1.5 1.5;1 1"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="fill-opacity"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                                values="1;0"
                                begin="-0.25s"
                            />
                        </circle>
                    </g>
                </g>
                <g transform="translate(49.99999999999999,24)">
                    <g transform="rotate(270)">
                        <circle cx="0" cy="0" r="4" fill="#93bf46" fillOpacity="0.25">
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                begin="-0.125s"
                                values="1.5 1.5;1 1"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="fill-opacity"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                                values="1;0"
                                begin="-0.125s"
                            />
                        </circle>
                    </g>
                </g>
                <g transform="translate(68.38477631085023,31.61522368914976)">
                    <g transform="rotate(315)">
                        <circle cx="0" cy="0" r="4" fill="#93bf46" fillOpacity="0.125">
                            <animateTransform
                                attributeName="transform"
                                type="scale"
                                begin="0s"
                                values="1.5 1.5;1 1"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="fill-opacity"
                                keyTimes="0;1"
                                dur="1s"
                                repeatCount="indefinite"
                                values="1;0"
                                begin="0s"
                            />
                        </circle>
                    </g>
                </g>
            </svg>
        </>
    );
};

export default Loader;