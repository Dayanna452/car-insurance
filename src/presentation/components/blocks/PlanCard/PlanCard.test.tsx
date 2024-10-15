import {render, screen, fireEvent} from '@testing-library/react';
import {describe, test, vi, expect} from 'vitest';
import { PlanCard } from '.';

describe('PlanCard Component', () => {
  const mockHandleSelectPlan = vi.fn();

  const props = {
    title: 'Plan Básico',
    price: 100,
    discount: true,
    descriptions: ['Descripción 1', 'Descripción 2', 'Descripción 3'],
    handleSelectPlan: mockHandleSelectPlan,
  };

  test('should render title, price, and descriptions', () => {
    render(<PlanCard {...props} />);

    // Verifica que el título se renderiza
    expect(screen.getByText('Plan Básico')).not.toBeNull();

    // Verifica que el precio con descuento se renderiza
    expect(screen.getByText('$100 antes')).not.toBeNull();
    expect(screen.getByText('$95 al mes')).not.toBeNull();

    // Verifica que las descripciones se renderizan
    props.descriptions.forEach(description => {
      expect(screen.getByText(description)).not.toBeNull();
    });
  });

  test('should render price without discount', () => {
    render(<PlanCard {...props} discount={false} />);

    // Verifica que el precio sin descuento se renderiza
    expect(screen.queryByText('$100 antes')).toBeNull();
    expect(screen.getByText('$100 al mes')).not.toBeNull();
  });

  test('should call handleSelectPlan when button is clicked', () => {
    render(<PlanCard {...props} />);

    // Encuentra el botón y simula un clic
    const button = screen.getByRole('button', { name: 'Seleccionar Plan' });
    fireEvent.click(button);

    // Verifica que la función mockHandleSelectPlan fue llamada
    expect(mockHandleSelectPlan).toHaveBeenCalledTimes(1);
  });
});
