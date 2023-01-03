export const Randomiser = () => {
    let x = Math.floor(Math.random() * 10);
    var result;
    switch (x) {
        case 0:
            result = "bg-blue";
            return result;
        case 1:
            result = "bg-azure";
            return result;
        case 2:
            result = "bg-indigo";
            return result;
        case 3:
            result = "bg-purple";
            return result;
        case 4:
            result = "bg-orange";
            return result;
        case 5:
            result = "bg-yellow";
            return result;
        case 6:
            result = "bg-lime";
            return result;
        case 7:
            result = "bg-green";
            return result;
        case 8:
            result = "bg-teal";
            return result;
        case 9:
            result = "bg-cyan";
            return result;
    }
};
