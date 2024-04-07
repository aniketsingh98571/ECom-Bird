import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Product from '@/app/products/[id]/page'
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
  }));
describe('Page', () => {
    it('renders a heading', () => {
       // Use the actual `useRouter` implementation
       const mockRouter = {
        query: {
          id: '1',
        },
      };
      (useRouter).mockReturnValue(mockRouter);
          const queryClient = new QueryClient();

          render(
            <QueryClientProvider client={queryClient}>
              <Product />
            </QueryClientProvider>
          );
   
      const heading = screen.getByTestId("checkProductRenderId")
   
      expect(heading).toBeInTheDocument()
    })
  })