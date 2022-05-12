import { render, screen } from '@testing-library/react';
import TravelRecordingForm from '../components/TravelRecordingForm';

test('renders travel recording form', () => {
  render(<TravelRecordingForm />);
  const linkElement = screen.getByText(/Origin Text/i);
  expect(linkElement).toBeInTheDocument();
});
