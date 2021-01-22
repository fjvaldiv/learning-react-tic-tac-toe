import { calculateWinner } from './helpers';

test('2 + 2 should return 4', () => {
    expect(2 + 2).toBe(4); // this test fails!
});

test('should return X as the winner if it has the top row', () => {
    // Arrange the test
    const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe('X');
  });

  test('should return 0 as the winner if it has the diagonal row', () => {
    // Arrange the test
    const squares = ['0', 'X', 'X', null, '0', 'O', null, null, '0'];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe('0');
  });

  test('should not have a winner', () => {
    // Arrange the test
    const squares = [null, 'X', 'X', 'O', null, 'O', null, null, null];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe(null);
  });