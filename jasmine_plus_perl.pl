use lib '/build/lib';
use Build::Debian::Test::Runner;
my $runner = Build::Debian::Test::Runner->new(archive_file => '/archive.tgz');
my $r1 = Build::Debian::Test::Runner::Single::Jasmine->new(file => 'spec/hello.Spec.js');
my $r2 = Build::Debian::Test::Runner::Single::Perl->new(file => 't/hello.t');
$runner->add($r1, $r2);
$runner->run();

