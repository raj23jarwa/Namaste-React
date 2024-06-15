import React from 'react';
import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MockData from '../../../__mock__/resCardMock.json';
import '@testing-library/jest-dom';

test('should render RestaurantCard component with props data', () => {
    // Render the component with the mock data
    
    render(<RestaurantCard restData={MockData.info} />);

    // Check if the restaurant name "Pizza Hut" is in the document
    const name = screen.getByText('Pizza Hut');
    expect(name).toBeInTheDocument();
});
