module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return 0
        }
        let depth = 0;
        arr.forEach(e => {
            if (Array.isArray(e)) {
                depth = Math.max(this.calculateDepth(e), depth);
            };
        });
        return depth + 1;
    }
};
