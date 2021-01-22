import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

test('should switch from X to O between clicks', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)} />);
    const Squares = board.queryAllByRole('button');
    
    fireEvent.click(Squares[0]);
    expect(Squares[0].innerHTML).toBe('X');

    fireEvent.click(Squares[1]);
    expect(Squares[1].innerHTML).toBe('O');

    fireEvent.click(Squares[2]);
    expect(Squares[2].innerHTML).toBe('X');

    fireEvent.click(Squares[3]);
    expect(Squares[3].innerHTML).toBe('O');

    fireEvent.click(Squares[4]);
    expect(Squares[4].innerHTML).toBe('X');
});

test("status message should alternate between X and O", () => {
    const board = render(<Board initialSquares={Array(9).fill(null)} />);
    const Squares = board.queryAllByRole('button');

    expect(board.queryByText('Next player: X')).not.toBe(null);

    fireEvent.click(Squares[0]);
    expect(board.queryByText('Next player: O')).not.toBe(null);

    fireEvent.click(Squares[1]);
    expect(board.queryByText('Next player: X')).not.toBe(null);

    fireEvent.click(Squares[2]);
    expect(board.queryByText('Next player: O')).not.toBe(null);
})