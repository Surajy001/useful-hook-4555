import { Button } from "@chakra-ui/react";

const Pagination = ({ pgno, totalPages, handlePageChange }) => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
            <Button
                key={i}
                border={pgno === i ? "1px solid grey" : null}
                variant={pgno === i ? 'solid' : 'ghost'}
                onClick={() => handlePageChange(i)}
                _hover={{ bg: "dodgerblue" }}
            >
                {i}
            </Button>
        );
    }
    return (
        <>
            <Button
            disabled={pgno===1}
                variant="solid"
                border={"1px solid grey"}
                onClick={pgno>1?() => handlePageChange(pgno - 1):null}
                _hover={pgno>1?{ bg: "dodgerblue" }:null}
            >
                {'Prev'}
            </Button>
            {pageButtons}
            <Button
                disabled={pgno===totalPages}
                variant="solid"
                border={"1px solid grey"}
                onClick={pgno<totalPages?() => handlePageChange(pgno + 1):null}
                _hover={pgno<totalPages?{ bg: "dodgerblue" }:null}
            >
                {'Next'}
            </Button>
        </>
    );
};

export default Pagination;