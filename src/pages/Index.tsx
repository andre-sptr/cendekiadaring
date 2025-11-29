import { useState } from 'react';
import { books, categories, levels } from '@/data/books';
import { BookCard } from '@/components/BookCard';
import { BookReader } from '@/components/BookReader';
import { AIAssistant } from '@/components/AIAssistant';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book } from '@/data/books';
import { BookOpen, Sparkles, Heart, Upload } from 'lucide-react';

const Index = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedLevel, setSelectedLevel] = useState('Semua');

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || book.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Semua' || book.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Platform Pembelajaran Terlengkap
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                Ribuan Buku
              </span>
              <br />
              <span className="text-foreground">
                Dalam Genggaman
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Akses perpustakaan digital lengkap dari SD hingga SMA. 
              Baca langsung, tandai favorit, dan belajar dengan AI assistant tanpa login!
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Jelajahi Perpustakaan
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Heart className="w-5 h-5" />
                Lihat Favorit
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Upload className="w-5 h-5" />
                Upload Dokumen
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{books.length}+</div>
                <div className="text-sm text-muted-foreground">Buku Tersedia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Gratis Akses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Assistant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-border/50 bg-card/30 backdrop-blur-sm sticky top-[73px] z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="space-y-4">
            {/* Level Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground py-2">
                Jenjang:
              </span>
              {levels.map(level => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedLevel(level)}
                  className={selectedLevel === level ? 'bg-gradient-primary' : ''}
                >
                  {level}
                </Button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground py-2">
                Kategori:
              </span>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-gradient-primary' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {filteredBooks.length} Buku Ditemukan
            </h2>
            <p className="text-muted-foreground">
              {selectedLevel !== 'Semua' && `${selectedLevel} • `}
              {selectedCategory !== 'Semua' && selectedCategory}
            </p>
          </div>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tidak ada buku ditemukan</h3>
            <p className="text-muted-foreground">
              Coba ubah filter atau kata kunci pencarian
            </p>
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

      {/* AI Assistant */}
      <AIAssistant />

      {/* Book Reader */}
      {selectedBook && (
        <BookReader
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};

export default Index;
