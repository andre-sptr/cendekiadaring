import { Book } from '@/data/books';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BookCardProps {
  book: Book;
  onRead: (book: Book) => void;
}

export function BookCard({ book, onRead }: BookCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(book.id));
  }, [book.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (isFavorite) {
      const newFavorites = favorites.filter((id: string) => id !== book.id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(book.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <Card className="group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <img 
          src={book.thumbnail} 
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorite ? 'fill-accent text-accent' : 'text-muted-foreground'}`}
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
          <Badge variant="secondary" className="text-xs">
            {book.level} {book.grade && `- Kelas ${book.grade}`}
          </Badge>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-foreground line-clamp-2 mb-1">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {book.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{book.pages} halaman</span>
          <span className="font-medium text-primary">{book.category}</span>
        </div>
        
        <Button 
          onClick={() => onRead(book)}
          className="w-full bg-gradient-primary hover:opacity-90"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Baca Sekarang
        </Button>
      </div>
    </Card>
  );
}
