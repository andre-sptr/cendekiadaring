import { useState, useEffect } from 'react';
import { books } from '@/data/books';
import { BookCard } from '@/components/BookCard';
import { BookReader } from '@/components/BookReader';
import { AIAssistant } from '@/components/AIAssistant';
import { Header } from '@/components/Header';
import { Book } from '@/data/books';
import { Heart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      const favBooks = books.filter(book => favorites.includes(book.id));
      setFavoriteBooks(favBooks);
    };

    loadFavorites();
    
    // Listen for storage changes
    window.addEventListener('storage', loadFavorites);
    return () => window.removeEventListener('storage', loadFavorites);
  }, []);

  const filteredBooks = favoriteBooks.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />

      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Buku Favorit Saya
              </h1>
              <p className="text-muted-foreground">
                {favoriteBooks.length} buku dalam koleksi Anda
              </p>
            </div>
          </div>
        </div>

        {favoriteBooks.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              Belum ada buku favorit
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Mulai tambahkan buku ke favorit dengan menekan ikon hati pada buku yang Anda sukai
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-gradient-primary"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Jelajahi Perpustakaan
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map(book => (
              <BookCard
                key={book.id}
                book={book}
                onRead={setSelectedBook}
              />
            ))}
          </div>
        )}
      </section>

      <AIAssistant />

      {selectedBook && (
        <BookReader
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};

export default Favorites;
