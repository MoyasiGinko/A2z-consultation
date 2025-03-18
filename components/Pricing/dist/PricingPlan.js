"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var PricingPackages = function () {
    // Expanded states for description sections
    var _a = react_1.useState({
        Gold: false,
        Platinum: false,
        VIP: false
    }), expandedStates = _a[0], setExpandedStates = _a[1];
    // Create refs for each card
    var cardRefs = {
        Gold: react_1.useRef(null),
        Platinum: react_1.useRef(null),
        VIP: react_1.useRef(null)
    };
    var packages = [
        {
            name: "Gold",
            tagline: "Esse magna sunt pariatur culpa quis",
            color: "#3d6582",
            ring: "#3d6582",
            text: "#ffb900",
            shadowColor: "rgba(135, 206, 235, 0.1)",
            features: [
                { text: "Anim magna proident" },
                { text: "Voluptate labore fugiat amet" },
                { text: "Cillum dolore sit cillum" },
                { text: "Veniam aute mollit veniam" },
            ],
            description: "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor. Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat."
        },
        {
            name: "Platinum",
            tagline: "Esse magna sunt pariatur culpa quis",
            color: "#7986cb",
            ring: "#7986cb",
            text: "#fff",
            shadowColor: "rgba(121, 134, 203, 0.1)",
            features: [
                { text: "Anim magna proident" },
                { text: "Voluptate labore fugiat amet" },
                { text: "Cillum dolore sit cillum" },
                { text: "Veniam aute mollit veniam" },
            ],
            description: "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor. Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat. Laboris esse qui Lorem in Lorem labore sit magna aliquip consectetur i"
        },
        {
            name: "VIP",
            tagline: "Esse magna sunt pariatur culpa quis",
            color: "#ffb900",
            ring: "#ffb900",
            text: "#000",
            shadowColor: "rgba(255, 185, 0, 0.1)",
            features: [
                { text: "Anim magna proident" },
                { text: "Voluptate labore fugiat amet" },
                { text: "Cillum dolore sit cillum" },
                { text: "Veniam aute mollit veniam" },
            ],
            description: "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor. Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat."
        },
    ];
    var toggleReadMore = function (packageName) {
        setExpandedStates(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[packageName] = !prevState[packageName], _a)));
        });
    };
    // Generate box shadow style string with glow effect and blur
    var getGlowBoxShadow = function (color) {
        return "0 0 30px 10px " + color + ", 0 15px 45px 7px " + color + ", 0 20px 60px 20px " + color + ", 0 25px 75px 25px " + color;
    };
    return (react_1["default"].createElement("div", { className: "min-h-screen w-full bg-gradient-to-r from-blue-50 via-white to-amber-50 px-4 py-24" },
        react_1["default"].createElement("div", { className: "flex justify-center" },
            react_1["default"].createElement("h1", { className: "mb-12 inline-block bg-gradient-to-r from-[#459ed2] via-[#0383c8] to-[#0c7cb0] bg-clip-text text-center text-4xl font-bold text-transparent" }, "Our Packages")),
        react_1["default"].createElement("div", { className: "mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3" }, packages.map(function (pkg) { return (react_1["default"].createElement(framer_motion_1.motion.div, { key: pkg.name, className: "relative", layout: true, transition: {
                layout: { duration: 0.4, ease: "easeInOut" }
            } },
            react_1["default"].createElement(framer_motion_1.motion.div, { ref: cardRefs[pkg.name], className: "relative overflow-hidden rounded-xl bg-white backdrop-blur-lg", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, whileHover: { y: -5 }, layout: true, style: {
                    boxShadow: getGlowBoxShadow(pkg.shadowColor)
                } },
                react_1["default"].createElement("div", { className: "px-6 py-4 text-center", style: { backgroundColor: pkg.color } },
                    react_1["default"].createElement("h2", { className: "text-3xl font-bold", style: { color: pkg.text } }, pkg.name)),
                react_1["default"].createElement("div", { className: "z-999 bg-white py-2" },
                    react_1["default"].createElement("div", { className: "p-6" },
                        react_1["default"].createElement("p", { className: "mb-4 italic text-gray-700" }, pkg.tagline),
                        react_1["default"].createElement("div", { className: "mb-4" },
                            react_1["default"].createElement("h3", { className: "mb-3 font-medium" }, "Features"),
                            react_1["default"].createElement("ul", { className: "space-y-2" }, pkg.features.map(function (feature, index) { return (react_1["default"].createElement(framer_motion_1.motion.li, { key: index, className: "flex items-start", initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 } },
                                react_1["default"].createElement("svg", { className: "mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                                    react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 13l4 4L19 7" })),
                                react_1["default"].createElement("span", null, feature.text))); }))),
                        react_1["default"].createElement(framer_motion_1.AnimatePresence, { mode: "sync" }, (pkg.alwaysExpanded || expandedStates[pkg.name]) && (react_1["default"].createElement(framer_motion_1.motion.div, { className: "mt-4 text-sm text-gray-600", initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: {
                                height: { duration: 0.3, ease: "easeInOut" },
                                opacity: { duration: 0.2 }
                            } },
                            react_1["default"].createElement("p", { className: "mb-4" }, pkg.description)))),
                        react_1["default"].createElement("button", { className: "mt-4 flex items-center text-sm text-teal-600", onClick: function () { return toggleReadMore(pkg.name); } },
                            expandedStates[pkg.name] ? "Read less" : "Read more",
                            react_1["default"].createElement("svg", { className: "ml-1 h-4 w-4 transition-transform " + (expandedStates[pkg.name] ? "rotate-180" : ""), fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                                react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }))),
                        react_1["default"].createElement(framer_motion_1.motion.button, { className: "mb-4 mt-8 w-full rounded-xl border-2 px-4 py-2", style: {
                                borderColor: pkg.ring,
                                color: pkg.color
                            }, whileHover: {
                                scale: 1.03,
                                backgroundColor: pkg.color,
                                color: pkg.text,
                                borderColor: pkg.color
                            }, whileTap: { scale: 0.98 } }, "Get in touch")))))); }))));
};
exports["default"] = PricingPackages;
